/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicenseTypeEnum } from './LicenseTypeEnum';
import { LicenseUpdateTypeEnum } from './LicenseUpdateTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UpdateUserLicenseParams
 */
export interface UpdateUserLicenseParams {
  /**
   * User Name.
   * @nullable
   */
  userName?: string;
  /**
   * License Type.
   * @nullable
   */
  licenseType?: LicenseTypeEnum;
  /**
   * License Update Type.
   * @nullable
   */
  licenseUpdateType?: LicenseUpdateTypeEnum;
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
export class UpdateUserLicenseParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UpdateUserLicenseParams> {
  /**
   * Representation of the [[UpdateUserLicenseParams.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserName', this, 'Edm.String');
  /**
   * Representation of the [[UpdateUserLicenseParams.licenseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  licenseType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LicenseType', this);
  /**
   * Representation of the [[UpdateUserLicenseParams.licenseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  licenseUpdateType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LicenseUpdateType', this);

  /**
   * Creates an instance of UpdateUserLicenseParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UpdateUserLicenseParams);
  }
}

export namespace UpdateUserLicenseParams {
  /**
   * Metadata information on all properties of the `UpdateUserLicenseParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UpdateUserLicenseParams>[] = [{
    originalName: 'UserName',
    name: 'userName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LicenseType',
    name: 'licenseType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LicenseUpdateType',
    name: 'licenseUpdateType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UpdateUserLicenseParams {
    return deserializeComplexTypeV4(json, UpdateUserLicenseParams);
  }
}
