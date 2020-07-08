/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalTemplateTerm
 */
export interface ApprovalTemplateTerm {
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
export class ApprovalTemplateTermField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
}

export namespace ApprovalTemplateTerm {
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateTerm {
    return createComplexType(json, {
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
