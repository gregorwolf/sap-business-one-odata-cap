/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WorkflowApprovalTaskListParams
 */
export interface WorkflowApprovalTaskListParams {
  /**
   * Status.
   * @nullable
   */
  status?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkflowApprovalTaskListParams.build]] instead.
 */
export function createWorkflowApprovalTaskListParams(json: any): WorkflowApprovalTaskListParams {
  return WorkflowApprovalTaskListParams.build(json);
}

/**
 * WorkflowApprovalTaskListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowApprovalTaskListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowApprovalTaskListParams> {
  /**
   * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Status', this, 'Edm.String');

  /**
   * Creates an instance of WorkflowApprovalTaskListParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkflowApprovalTaskListParams);
  }
}

export namespace WorkflowApprovalTaskListParams {
  /**
   * Metadata information on all properties of the `WorkflowApprovalTaskListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowApprovalTaskListParams>[] = [{
    originalName: 'Status',
    name: 'status',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkflowApprovalTaskListParams {
    return deserializeComplexTypeV4(json, WorkflowApprovalTaskListParams);
  }
}
