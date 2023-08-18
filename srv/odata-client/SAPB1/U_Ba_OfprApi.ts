/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Ofpr } from './U_Ba_Ofpr';
import { U_Ba_OfprRequestBuilder } from './U_Ba_OfprRequestBuilder';
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
export class U_Ba_OfprApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OfprApi<DeSerializersT> {
    return new U_Ba_OfprApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Ofpr;

  requestBuilder(): U_Ba_OfprRequestBuilder<DeSerializersT> {
    return new U_Ba_OfprRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Ofpr<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Ofpr<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Ofpr, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Ofpr, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DATE_FROM: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_DATE_TO: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_OPEN: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_YEAR_CHNG: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHANGE_TO: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_PRD: OrderableEdmTypeField<
      U_Ba_Ofpr<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Ofpr<DeSerializers>>;
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
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DATE_FROM: fieldBuilder.buildEdmTypeField(
          'U_DateFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DATE_TO: fieldBuilder.buildEdmTypeField(
          'U_DateTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uOpen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPEN: fieldBuilder.buildEdmTypeField('U_Open', 'Edm.String', true),
        /**
         * Static representation of the {@link uYearChng} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_YEAR_CHNG: fieldBuilder.buildEdmTypeField(
          'U_YearChng',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uChangeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHANGE_TO: fieldBuilder.buildEdmTypeField(
          'U_ChangeTo',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Ofpr)
      };
    }

    return this._schema;
  }
}
