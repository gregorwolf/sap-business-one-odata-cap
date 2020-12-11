/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ApprovalTemplateStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateStage> {
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

  /**
   * Creates an instance of ApprovalTemplateStageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalTemplateStage);
  }
}

export namespace ApprovalTemplateStage {
  /**
   * Metadata information on all properties of the `ApprovalTemplateStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateStage>[] = [{
    originalName: 'SortID',
    name: 'sortId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ApprovalStageCode',
    name: 'approvalStageCode',
    type: 'Edm.Int32',
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
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateStage {
    return deserializeComplexTypeV4(json, ApprovalTemplateStage);
  }
}
