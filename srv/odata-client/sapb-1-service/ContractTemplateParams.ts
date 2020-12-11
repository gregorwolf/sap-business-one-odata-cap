/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ContractTemplateParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContractTemplateParams> {
  /**
   * Representation of the [[ContractTemplateParams.templateName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TemplateName', this, 'Edm.String');

  /**
   * Creates an instance of ContractTemplateParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ContractTemplateParams);
  }
}

export namespace ContractTemplateParams {
  /**
   * Metadata information on all properties of the `ContractTemplateParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContractTemplateParams>[] = [{
    originalName: 'TemplateName',
    name: 'templateName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ContractTemplateParams {
    return deserializeComplexTypeV4(json, ContractTemplateParams);
  }
}
