/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalTemplateStage
 */
export interface ApprovalTemplateStage {
  /**
   * Sort Id.
   * @nullable
   */
  sortId?: number;
  /**
   * Approval Stage Code.
   * @nullable
   */
  approvalStageCode?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateStage.build]] instead.
 */
export function createApprovalTemplateStage(json: any): ApprovalTemplateStage {
  return ApprovalTemplateStage.build(json);
}

/**
 * ApprovalTemplateStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateStageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalTemplateStage.sortId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SortID', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalTemplateStage.approvalStageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalStageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalStageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalTemplateStage.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace ApprovalTemplateStage {
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateStage {
    return createComplexType(json, {
      SortID: (sortId: number) => ({ sortId: edmToTs(sortId, 'Edm.Int32') }),
      ApprovalStageCode: (approvalStageCode: number) => ({ approvalStageCode: edmToTs(approvalStageCode, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
