/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoApprovalRequestDecisionEnum } from './BoApprovalRequestDecisionEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Status.
   * @nullable
   */
  status?: BoApprovalRequestDecisionEnum;
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
export class ApprovalRequestDecisionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestDecision> {
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
   * Representation of the [[ApprovalRequestDecision.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[ApprovalRequestDecision.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of ApprovalRequestDecisionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalRequestDecision);
  }
}

export namespace ApprovalRequestDecision {
  /**
   * Metadata information on all properties of the `ApprovalRequestDecision` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalRequestDecision>[] = [{
    originalName: 'ApproverUserName',
    name: 'approverUserName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ApproverPassword',
    name: 'approverPassword',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalRequestDecision {
    return deserializeComplexTypeV4(json, ApprovalRequestDecision);
  }
}
