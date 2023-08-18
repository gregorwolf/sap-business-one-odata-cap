/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportTypes } from './ReportTypes';
import { ReportTypesRequestBuilder } from './ReportTypesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ReportTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReportTypes<DeSerializersT>, DeSerializersT>
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
  ): ReportTypesApi<DeSerializersT> {
    return new ReportTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReportTypes;

  requestBuilder(): ReportTypesRequestBuilder<DeSerializersT> {
    return new ReportTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReportTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReportTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReportTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ReportTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ReportTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE_CODE: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_NAME: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_REPORT_LAYOUT: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDON_NAME: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDON_FORM_TYPE: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_ID: OrderableEdmTypeField<
      ReportTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReportTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link typeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'TypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReportLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REPORT_LAYOUT: fieldBuilder.buildEdmTypeField(
          'DefaultReportLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDON_NAME: fieldBuilder.buildEdmTypeField(
          'AddonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addonFormType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDON_FORM_TYPE: fieldBuilder.buildEdmTypeField(
          'AddonFormType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link menuId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ID: fieldBuilder.buildEdmTypeField('MenuID', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReportTypes)
      };
    }

    return this._schema;
  }
}
