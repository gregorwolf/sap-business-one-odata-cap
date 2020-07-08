/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalRequestDecision
 */
export interface ApprovalRequestDecision {
  /**
   * Approver User Name.
   * @nullable
   */
  approverUserName?: string;
  /**
   * Approver Password.
   * @nullable
   */
  approverPassword?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestDecision.build]] instead.
 */
export function createApprovalRequestDecision(json: any): ApprovalRequestDecision {
  return ApprovalRequestDecision.build(json);
}

/**
 * ApprovalRequestDecisionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalRequestDecisionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalRequestDecision.approverUserName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approverUserName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ApproverUserName', this, 'Edm.String');
  /**
   * Representation of the [[ApprovalRequestDecision.approverPassword]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approverPassword: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ApproverPassword', this, 'Edm.String');
  /**
   * Representation of the [[ApprovalRequestDecision.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace ApprovalRequestDecision {
  export function build(json: { [keys: string]: FieldType }): ApprovalRequestDecision {
    return createComplexType(json, {
      ApproverUserName: (approverUserName: string) => ({ approverUserName: edmToTs(approverUserName, 'Edm.String') }),
      ApproverPassword: (approverPassword: string) => ({ approverPassword: edmToTs(approverPassword, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
