/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class WorkflowApprovalTaskListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Status', this, 'Edm.String');
}

export namespace WorkflowApprovalTaskListParams {
  export function build(json: { [keys: string]: FieldType }): WorkflowApprovalTaskListParams {
    return createComplexType(json, {
      Status: (status: string) => ({ status: edmToTs(status, 'Edm.String') })
    });
  }
}
