/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentApprovalRequest
 */
export interface DocumentApprovalRequest {
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
 * @deprecated Since v1.6.0. Use [[DocumentApprovalRequest.build]] instead.
 */
export function createDocumentApprovalRequest(json: any): DocumentApprovalRequest {
  return DocumentApprovalRequest.build(json);
}

/**
 * DocumentApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentApprovalRequestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentApprovalRequest.approvalTemplatesId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalTemplatesID', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentApprovalRequest.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace DocumentApprovalRequest {
  export function build(json: { [keys: string]: FieldType }): DocumentApprovalRequest {
    return createComplexType(json, {
      ApprovalTemplatesID: (approvalTemplatesId: number) => ({ approvalTemplatesId: edmToTs(approvalTemplatesId, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
