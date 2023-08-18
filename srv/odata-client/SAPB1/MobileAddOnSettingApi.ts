/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAddOnSetting } from './MobileAddOnSetting';
import { MobileAddOnSettingRequestBuilder } from './MobileAddOnSettingRequestBuilder';
import { MobileAddonSettingTypeEnum } from './MobileAddonSettingTypeEnum';
import { ViewStyleTypeEnum } from './ViewStyleTypeEnum';
import { LogonMethodEnum } from './LogonMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class MobileAddOnSettingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MobileAddOnSettingApi<DeSerializersT> {
    return new MobileAddOnSettingApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MobileAddOnSetting;

  requestBuilder(): MobileAddOnSettingRequestBuilder<DeSerializersT> {
    return new MobileAddOnSettingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MobileAddOnSetting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MobileAddOnSetting<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MobileAddOnSetting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MobileAddOnSetting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      MobileAddonSettingTypeEnum,
      true,
      true
    >;
    PROVIDER: OrderableEdmTypeField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIEW_STYLE: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      ViewStyleTypeEnum,
      true,
      true
    >;
    LOGON_METHOD: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      LogonMethodEnum,
      true,
      true
    >;
    ENABLE: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    B_1_MOBILE_APP: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    B_1_SALES_APP: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    B_1_SERVICE_APP: EnumField<
      MobileAddOnSetting<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MobileAddOnSetting<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          MobileAddonSettingTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link provider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVIDER: fieldBuilder.buildEdmTypeField(
          'Provider',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link viewStyle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_STYLE: fieldBuilder.buildEnumField(
          'ViewStyle',
          ViewStyleTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link logonMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGON_METHOD: fieldBuilder.buildEnumField(
          'LogonMethod',
          LogonMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link enable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE: fieldBuilder.buildEnumField('Enable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link b1MobileApp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_1_MOBILE_APP: fieldBuilder.buildEnumField(
          'B1MobileApp',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link b1SalesApp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_1_SALES_APP: fieldBuilder.buildEnumField(
          'B1SalesApp',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link b1ServiceApp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_1_SERVICE_APP: fieldBuilder.buildEnumField(
          'B1ServiceApp',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MobileAddOnSetting)
      };
    }

    return this._schema;
  }
}
