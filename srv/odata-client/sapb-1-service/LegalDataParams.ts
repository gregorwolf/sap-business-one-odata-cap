/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LegalDataParams
 */
export interface LegalDataParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Source Object Type.
   * @nullable
   */
  sourceObjectType?: string;
  /**
   * Source Object Entry.
   * @nullable
   */
  sourceObjectEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
export function createLegalDataParams(json: any): LegalDataParams {
  return LegalDataParams.build(json);
}

/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LegalDataParams> {
  /**
   * Representation of the [[LegalDataParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourceObjectType', this, 'Edm.String');
  /**
   * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceObjectEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of LegalDataParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LegalDataParams);
  }
}

export namespace LegalDataParams {
  /**
   * Metadata information on all properties of the `LegalDataParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LegalDataParams>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SourceObjectType',
    name: 'sourceObjectType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SourceObjectEntry',
    name: 'sourceObjectEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LegalDataParams {
    return deserializeComplexTypeV4(json, LegalDataParams);
  }
}
