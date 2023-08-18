/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicenseTypeEnum } from './LicenseTypeEnum';
import { LicenseUpdateTypeEnum } from './LicenseUpdateTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * UpdateUserLicenseParams
 */
export interface UpdateUserLicenseParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Name.
   * @nullable
   */
  userName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * License Type.
   * @nullable
   */
  licenseType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * License Update Type.
   * @nullable
   */
  licenseUpdateType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * UpdateUserLicenseParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UpdateUserLicenseParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UpdateUserLicenseParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UpdateUserLicenseParams.userName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserName', 'Edm.String', true);
  /**
   * Representation of the {@link UpdateUserLicenseParams.licenseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  licenseType: EnumField<
    EntityT,
    DeSerializersT,
    LicenseTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('LicenseType', LicenseTypeEnum, true);
  /**
   * Representation of the {@link UpdateUserLicenseParams.licenseUpdateType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  licenseUpdateType: EnumField<
    EntityT,
    DeSerializersT,
    LicenseUpdateTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LicenseUpdateType',
    LicenseUpdateTypeEnum,
    true
  );

  /**
   * Creates an instance of UpdateUserLicenseParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      UpdateUserLicenseParams,
      fieldOptions
    );
  }
}

export namespace UpdateUserLicenseParams {
  /**
   * Metadata information on all properties of the `UpdateUserLicenseParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UpdateUserLicenseParams>[] =
    [
      {
        originalName: 'UserName',
        name: 'userName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LicenseType',
        name: 'licenseType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'LicenseUpdateType',
        name: 'licenseUpdateType',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
