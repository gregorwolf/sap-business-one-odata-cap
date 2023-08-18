/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odoc } from './U_Ba_Odoc';
import { U_Ba_OdocRequestBuilder } from './U_Ba_OdocRequestBuilder';
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
  Time,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_OdocApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OdocApi<DeSerializersT> {
    return new U_Ba_OdocApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odoc;

  requestBuilder(): U_Ba_OdocRequestBuilder<DeSerializersT> {
    return new U_Ba_OdocRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odoc<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odoc<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odoc, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odoc, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_NUM: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TRNS_ID: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CANCELED: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_GL_DOC_NUM: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_DATE: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_POST_PRD: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_POST_DESC: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_TYPE: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CODE: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CREA_DATE: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_CREA_TIME: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_CREA_USER: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_TYP_ID: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_GL_POST_DT: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_REF: OrderableEdmTypeField<
      U_Ba_Odoc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odoc<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'U_DocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTrnsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRNS_ID: fieldBuilder.buildEdmTypeField(
          'U_TrnsID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCanceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CANCELED: fieldBuilder.buildEdmTypeField(
          'U_Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uGlDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_GL_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'U_GLDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_DATE: fieldBuilder.buildEdmTypeField(
          'U_PostDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uPostPrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_PRD: fieldBuilder.buildEdmTypeField(
          'U_PostPrd',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPostDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_DESC: fieldBuilder.buildEdmTypeField(
          'U_PostDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_TYPE: fieldBuilder.buildEdmTypeField(
          'U_DocType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CODE: fieldBuilder.buildEdmTypeField('U_Code', 'Edm.String', true),
        /**
         * Static representation of the {@link uCreaDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_DATE: fieldBuilder.buildEdmTypeField(
          'U_CreaDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uCreaTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_TIME: fieldBuilder.buildEdmTypeField(
          'U_CreaTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uCreaUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_USER: fieldBuilder.buildEdmTypeField(
          'U_CreaUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprTypId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_TYP_ID: fieldBuilder.buildEdmTypeField(
          'U_DprTypID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uGlPostDt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_GL_POST_DT: fieldBuilder.buildEdmTypeField(
          'U_GLPostDt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REF: fieldBuilder.buildEdmTypeField('U_Ref', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odoc)
      };
    }

    return this._schema;
  }
}
