/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bs_Aufmonitor } from './U_Bs_Aufmonitor';
import { U_Bs_AufmonitorRequestBuilder } from './U_Bs_AufmonitorRequestBuilder';
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
export class U_Bs_AufmonitorApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
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
  ): U_Bs_AufmonitorApi<DeSerializersT> {
    return new U_Bs_AufmonitorApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bs_Aufmonitor;

  requestBuilder(): U_Bs_AufmonitorRequestBuilder<DeSerializersT> {
    return new U_Bs_AufmonitorRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bs_Aufmonitor<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bs_Aufmonitor, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        U_Bs_Aufmonitor,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LIEFERART_ID: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ZDIFFGELB: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ZDIFFROT: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ZDIFFSCHWARZ: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ASGRENZEGELB: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ASGRENZEROT: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ASGRENZESCHWARZ: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_UHRZEITVORGABE: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    U_ZDIFFINFOSERVICE: OrderableEdmTypeField<
      U_Bs_Aufmonitor<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<U_Bs_Aufmonitor<DeSerializers>>;
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
         * Static representation of the {@link uLieferartId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LIEFERART_ID: fieldBuilder.buildEdmTypeField(
          'U_Lieferart_ID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uZdiffgelb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFGELB: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFGELB',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uZdiffrot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFROT: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFROT',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uZdiffschwarz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFSCHWARZ: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFSCHWARZ',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uAsgrenzegelb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASGRENZEGELB: fieldBuilder.buildEdmTypeField(
          'U_ASGRENZEGELB',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uAsgrenzerot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASGRENZEROT: fieldBuilder.buildEdmTypeField(
          'U_ASGRENZEROT',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uAsgrenzeschwarz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASGRENZESCHWARZ: fieldBuilder.buildEdmTypeField(
          'U_ASGRENZESCHWARZ',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uUhrzeitvorgabe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UHRZEITVORGABE: fieldBuilder.buildEdmTypeField(
          'U_UHRZEITVORGABE',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link uZdiffinfoservice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZDIFFINFOSERVICE: fieldBuilder.buildEdmTypeField(
          'U_ZDIFFINFOSERVICE',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bs_Aufmonitor)
      };
    }

    return this._schema;
  }
}
