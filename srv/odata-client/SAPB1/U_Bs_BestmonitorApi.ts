/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bs_Bestmonitor } from './U_Bs_Bestmonitor';
import { U_Bs_BestmonitorRequestBuilder } from './U_Bs_BestmonitorRequestBuilder';
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
export class U_Bs_BestmonitorApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
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
  ): U_Bs_BestmonitorApi<DeSerializersT> {
    return new U_Bs_BestmonitorApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bs_Bestmonitor;

  requestBuilder(): U_Bs_BestmonitorRequestBuilder<DeSerializersT> {
    return new U_Bs_BestmonitorRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bs_Bestmonitor<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bs_Bestmonitor, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        U_Bs_Bestmonitor,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_WHS_CODE: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ZDIFFGELB: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ZDIFFROT: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ZDIFFSCHWARZ: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_UHRZEITVORGABE: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_ZDIFFINFOSERVICE: OrderableEdmTypeField<
      U_Bs_Bestmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bs_Bestmonitor<DeSerializers>>;
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
         * Static representation of the {@link uWhsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_WHS_CODE: fieldBuilder.buildEdmTypeField(
          'U_WhsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uZdiffgelb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFGELB: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFGELB',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uZdiffrot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFROT: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFROT',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uZdiffschwarz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFSCHWARZ: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFSCHWARZ',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uUhrzeitvorgabe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UHRZEITVORGABE: fieldBuilder.buildEdmTypeField(
          'U_UHRZEITVORGABE',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uZdiffinfoservice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFINFOSERVICE: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFINFOSERVICE',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bs_Bestmonitor)
      };
    }

    return this._schema;
  }
}
