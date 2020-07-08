/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UpdateUserLicenseParams
 */
export interface UpdateUserLicenseParams {
  /**
   * User Name.
   * @nullable
   */
  userName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UpdateUserLicenseParams.build]] instead.
 */
export function createUpdateUserLicenseParams(json: any): UpdateUserLicenseParams {
  return UpdateUserLicenseParams.build(json);
}

/**
 * UpdateUserLicenseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UpdateUserLicenseParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UpdateUserLicenseParams.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserName', this, 'Edm.String');
}

export namespace UpdateUserLicenseParams {
  export function build(json: { [keys: string]: FieldType }): UpdateUserLicenseParams {
    return createComplexType(json, {
      UserName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') })
    });
  }
}
