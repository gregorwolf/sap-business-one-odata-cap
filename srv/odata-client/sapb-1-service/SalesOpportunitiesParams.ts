/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesParams
 */
export interface SalesOpportunitiesParams {
  /**
   * Sequential No.
   * @nullable
   */
  sequentialNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesParams.build]] instead.
 */
export function createSalesOpportunitiesParams(json: any): SalesOpportunitiesParams {
  return SalesOpportunitiesParams.build(json);
}

/**
 * SalesOpportunitiesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesParams> {
  /**
   * Representation of the [[SalesOpportunitiesParams.sequentialNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequentialNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequentialNo', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesOpportunitiesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesParams);
  }
}

export namespace SalesOpportunitiesParams {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesParams>[] = [{
    originalName: 'SequentialNo',
    name: 'sequentialNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesParams {
    return deserializeComplexTypeV4(json, SalesOpportunitiesParams);
  }
}
