/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalTemplateConditionTypeEnum } from './ApprovalTemplateConditionTypeEnum';
import { ApprovalTemplateOperationTypeEnum } from './ApprovalTemplateOperationTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ApprovalTemplateTerm
 */
export interface ApprovalTemplateTerm {
  /**
   * Condition Type.
   * @nullable
   */
  conditionType?: ApprovalTemplateConditionTypeEnum;
  /**
   * Operation Type.
   * @nullable
   */
  operationType?: ApprovalTemplateOperationTypeEnum;
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateTerm.build]] instead.
 */
export function createApprovalTemplateTerm(json: any): ApprovalTemplateTerm {
  return ApprovalTemplateTerm.build(json);
}

/**
 * ApprovalTemplateTermField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateTermField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateTerm> {
  /**
   * Representation of the [[ApprovalTemplateTerm.conditionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  conditionType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConditionType', this);
  /**
   * Representation of the [[ApprovalTemplateTerm.operationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operationType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('OperationType', this);
  /**
   * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');

  /**
   * Creates an instance of ApprovalTemplateTermField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalTemplateTerm);
  }
}

export namespace ApprovalTemplateTerm {
  /**
   * Metadata information on all properties of the `ApprovalTemplateTerm` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateTerm>[] = [{
    originalName: 'ConditionType',
    name: 'conditionType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OperationType',
    name: 'operationType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateTerm {
    return deserializeComplexTypeV4(json, ApprovalTemplateTerm);
  }
}
