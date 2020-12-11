/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WorkOrderParams
 */
export interface WorkOrderParams {
  /**
   * Order Num.
   * @nullable
   */
  orderNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkOrderParams.build]] instead.
 */
export function createWorkOrderParams(json: any): WorkOrderParams {
  return WorkOrderParams.build(json);
}

/**
 * WorkOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkOrderParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkOrderParams> {
  /**
   * Representation of the [[WorkOrderParams.orderNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderNum', this, 'Edm.Int32');

  /**
   * Creates an instance of WorkOrderParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkOrderParams);
  }
}

export namespace WorkOrderParams {
  /**
   * Metadata information on all properties of the `WorkOrderParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkOrderParams>[] = [{
    originalName: 'OrderNum',
    name: 'orderNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkOrderParams {
    return deserializeComplexTypeV4(json, WorkOrderParams);
  }
}
