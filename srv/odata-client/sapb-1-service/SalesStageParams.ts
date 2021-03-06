/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesStageParams
 */
export interface SalesStageParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesStageParams.build]] instead.
 */
export function createSalesStageParams(json: any): SalesStageParams {
  return SalesStageParams.build(json);
}

/**
 * SalesStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesStageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesStageParams> {
  /**
   * Representation of the [[SalesStageParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesStageParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesStageParams);
  }
}

export namespace SalesStageParams {
  /**
   * Metadata information on all properties of the `SalesStageParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesStageParams>[] = [{
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesStageParams {
    return deserializeComplexTypeV4(json, SalesStageParams);
  }
}
