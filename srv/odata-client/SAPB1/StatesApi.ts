/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { States } from './States';
import { StatesRequestBuilder } from './StatesRequestBuilder';
import { CountriesApi } from './CountriesApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class StatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<States<DeSerializersT>, DeSerializersT>
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
  ): StatesApi<DeSerializersT> {
    return new StatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      States<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CountriesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = States;

  requestBuilder(): StatesRequestBuilder<DeSerializersT> {
    return new StatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<States<DeSerializersT>, DeSerializersT> {
    return entityBuilder<States<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<States<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof States, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(States, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      States<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      States<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      States<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_CODE: OrderableEdmTypeField<
      States<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_UNION_TERRITORY: EnumField<
      States<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      States<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<States<DeSerializers>>;
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
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link gstCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_CODE: fieldBuilder.buildEdmTypeField('GSTCode', 'Edm.String', true),
        /**
         * Static representation of the {@link isUnionTerritory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNION_TERRITORY: fieldBuilder.buildEnumField(
          'IsUnionTerritory',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', States)
      };
    }

    return this._schema;
  }
}
