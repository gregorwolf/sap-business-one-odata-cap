/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ColumnsPreferencesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ColumnsPreferencesParams {
  export function build(json: { [keys: string]: FieldType }): ColumnsPreferencesParams {
    return createComplexType(json, {
      User: (user: number) => ({ user: edmToTs(user, 'Edm.Int32') }),
      FormID: (formId: string) => ({ formId: edmToTs(formId, 'Edm.String') })
    });
  }
}
