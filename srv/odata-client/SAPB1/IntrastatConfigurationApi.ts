/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatConfiguration } from './IntrastatConfiguration';
import { IntrastatConfigurationRequestBuilder } from './IntrastatConfigurationRequestBuilder';
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { IntrastatConfigurationTriangDealEnum } from './IntrastatConfigurationTriangDealEnum';
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
export class IntrastatConfigurationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntrastatConfiguration<DeSerializersT>, DeSerializersT>
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
  ): IntrastatConfigurationApi<DeSerializersT> {
    return new IntrastatConfigurationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatConfiguration;

  requestBuilder(): IntrastatConfigurationRequestBuilder<DeSerializersT> {
    return new IntrastatConfigurationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatConfiguration<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntrastatConfiguration<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatConfiguration<DeSerializersT>,
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
    typeof IntrastatConfiguration,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatConfiguration,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONF_TYPE: EnumField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      IntrastatConfigurationEnum,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRCST_VAL: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SUPP_UNIT: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXPORT: EnumField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IMPORT: EnumField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STAT_CODE: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONF_ID: OrderableEdmTypeField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIANG_DEAL: EnumField<
      IntrastatConfiguration<DeSerializers>,
      DeSerializersT,
      IntrastatConfigurationTriangDealEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatConfiguration<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link confType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONF_TYPE: fieldBuilder.buildEnumField(
          'ConfType',
          IntrastatConfigurationEnum,
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link descr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCR: fieldBuilder.buildEdmTypeField('Descr', 'Edm.String', true),
        /**
         * Static representation of the {@link prcstVal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRCST_VAL: fieldBuilder.buildEdmTypeField(
          'PrcstVal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link suppUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPP_UNIT: fieldBuilder.buildEdmTypeField(
          'SuppUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link export} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT: fieldBuilder.buildEnumField('Export', BoYesNoEnum, true),
        /**
         * Static representation of the {@link import} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT: fieldBuilder.buildEnumField('Import', BoYesNoEnum, true),
        /**
         * Static representation of the {@link statCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_CODE: fieldBuilder.buildEdmTypeField(
          'StatCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link confId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONF_ID: fieldBuilder.buildEdmTypeField('ConfID', 'Edm.String', true),
        /**
         * Static representation of the {@link triangDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANG_DEAL: fieldBuilder.buildEnumField(
          'TriangDeal',
          IntrastatConfigurationTriangDealEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatConfiguration)
      };
    }

    return this._schema;
  }
}
