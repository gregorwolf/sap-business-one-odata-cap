/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ApprovalTemplateParams
 */
export interface ApprovalTemplateParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateParams.build]] instead.
 */
export function createApprovalTemplateParams(json: any): ApprovalTemplateParams {
  return ApprovalTemplateParams.build(json);
}

/**
 * ApprovalTemplateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateParams> {
  /**
   * Representation of the [[ApprovalTemplateParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalTemplateParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ApprovalTemplateParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalTemplateParams);
  }
}

export namespace ApprovalTemplateParams {
  /**
   * Metadata information on all properties of the `ApprovalTemplateParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateParams {
    return deserializeComplexTypeV4(json, ApprovalTemplateParams);
  }
}
