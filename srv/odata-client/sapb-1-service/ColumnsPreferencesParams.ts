/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ColumnsPreferencesParams
 */
export interface ColumnsPreferencesParams {
  /**
   * User.
   * @nullable
   */
  user?: number;
  /**
   * Form Id.
   * @nullable
   */
  formId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ColumnsPreferencesParams.build]] instead.
 */
export function createColumnsPreferencesParams(json: any): ColumnsPreferencesParams {
  return ColumnsPreferencesParams.build(json);
}

/**
 * ColumnsPreferencesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ColumnsPreferencesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ColumnsPreferencesParams> {
  /**
   * Representation of the [[ColumnsPreferencesParams.user]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('User', this, 'Edm.Int32');
  /**
   * Representation of the [[ColumnsPreferencesParams.formId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormID', this, 'Edm.String');

  /**
   * Creates an instance of ColumnsPreferencesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ColumnsPreferencesParams);
  }
}

export namespace ColumnsPreferencesParams {
  /**
   * Metadata information on all properties of the `ColumnsPreferencesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ColumnsPreferencesParams>[] = [{
    originalName: 'User',
    name: 'user',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FormID',
    name: 'formId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ColumnsPreferencesParams {
    return deserializeComplexTypeV4(json, ColumnsPreferencesParams);
  }
}
