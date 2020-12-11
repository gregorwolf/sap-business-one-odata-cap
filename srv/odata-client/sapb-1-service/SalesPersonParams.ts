/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesPersonParams
 */
export interface SalesPersonParams {
  /**
   * Sales Employee Code.
   * @nullable
   */
  salesEmployeeCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesPersonParams.build]] instead.
 */
export function createSalesPersonParams(json: any): SalesPersonParams {
  return SalesPersonParams.build(json);
}

/**
 * SalesPersonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesPersonParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesPersonParams> {
  /**
   * Representation of the [[SalesPersonParams.salesEmployeeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesEmployeeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SalesEmployeeCode', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesPersonParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesPersonParams);
  }
}

export namespace SalesPersonParams {
  /**
   * Metadata information on all properties of the `SalesPersonParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesPersonParams>[] = [{
    originalName: 'SalesEmployeeCode',
    name: 'salesEmployeeCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesPersonParams {
    return deserializeComplexTypeV4(json, SalesPersonParams);
  }
}
