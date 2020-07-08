/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentsApprovalRequest
 */
export interface PaymentsApprovalRequest {
  /**
   * Approval Templates Id.
   * @nullable
   */
  approvalTemplatesId?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentsApprovalRequest.build]] instead.
 */
export function createPaymentsApprovalRequest(json: any): PaymentsApprovalRequest {
  return PaymentsApprovalRequest.build(json);
}

/**
 * PaymentsApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentsApprovalRequestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentsApprovalRequest.approvalTemplatesId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalTemplatesID', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentsApprovalRequest.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace PaymentsApprovalRequest {
  export function build(json: { [keys: string]: FieldType }): PaymentsApprovalRequest {
    return createComplexType(json, {
      ApprovalTemplatesID: (approvalTemplatesId: number) => ({ approvalTemplatesId: edmToTs(approvalTemplatesId, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
