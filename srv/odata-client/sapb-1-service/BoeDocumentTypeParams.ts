/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BoeDocumentTypeParams
 */
export interface BoeDocumentTypeParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
export function createBoeDocumentTypeParams(json: any): BoeDocumentTypeParams {
  return BoeDocumentTypeParams.build(json);
}

/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeDocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeDocumentTypeParams> {
  /**
   * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocType', this, 'Edm.String');

  /**
   * Creates an instance of BoeDocumentTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BoeDocumentTypeParams);
  }
}

export namespace BoeDocumentTypeParams {
  /**
   * Metadata information on all properties of the `BoeDocumentTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeDocumentTypeParams>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BoeDocumentTypeParams {
    return deserializeComplexTypeV4(json, BoeDocumentTypeParams);
  }
}
