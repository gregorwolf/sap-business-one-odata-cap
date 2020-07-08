/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ContractTemplateParams
 */
export interface ContractTemplateParams {
  /**
   * Template Name.
   * @nullable
   */
  templateName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ContractTemplateParams.build]] instead.
 */
export function createContractTemplateParams(json: any): ContractTemplateParams {
  return ContractTemplateParams.build(json);
}

/**
 * ContractTemplateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContractTemplateParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ContractTemplateParams.templateName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TemplateName', this, 'Edm.String');
}

export namespace ContractTemplateParams {
  export function build(json: { [keys: string]: FieldType }): ContractTemplateParams {
    return createComplexType(json, {
      TemplateName: (templateName: string) => ({ templateName: edmToTs(templateName, 'Edm.String') })
    });
  }
}
