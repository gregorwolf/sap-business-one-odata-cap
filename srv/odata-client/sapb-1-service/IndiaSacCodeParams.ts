/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * IndiaSacCodeParams
 */
export interface IndiaSacCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
export function createIndiaSacCodeParams(json: any): IndiaSacCodeParams {
  return IndiaSacCodeParams.build(json);
}

/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IndiaSacCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndiaSacCodeParams> {
  /**
   * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServiceCode', this, 'Edm.String');

  /**
   * Creates an instance of IndiaSacCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, IndiaSacCodeParams);
  }
}

export namespace IndiaSacCodeParams {
  /**
   * Metadata information on all properties of the `IndiaSacCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IndiaSacCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ServiceCode',
    name: 'serviceCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): IndiaSacCodeParams {
    return deserializeComplexTypeV4(json, IndiaSacCodeParams);
  }
}
