/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilFuelIndexers } from './BrazilFuelIndexers';
import { BrazilFuelIndexersRequestBuilder } from './BrazilFuelIndexersRequestBuilder';
import { ItemsApi } from './ItemsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BrazilFuelIndexersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
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
  ): BrazilFuelIndexersApi<DeSerializersT> {
    return new BrazilFuelIndexersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilFuelIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BrazilFuelIndexers;

  requestBuilder(): BrazilFuelIndexersRequestBuilder<DeSerializersT> {
    return new BrazilFuelIndexersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilFuelIndexers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilFuelIndexers<DeSerializersT>,
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
    typeof BrazilFuelIndexers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilFuelIndexers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FUEL_ID: OrderableEdmTypeField<
      BrazilFuelIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FUEL_GROUP_CODE: OrderableEdmTypeField<
      BrazilFuelIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FUEL_CODE: OrderableEdmTypeField<
      BrazilFuelIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BrazilFuelIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilFuelIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrazilFuelIndexers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fuelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_ID: fieldBuilder.buildEdmTypeField('FuelID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link fuelGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'FuelGroupCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fuelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_CODE: fieldBuilder.buildEdmTypeField(
          'FuelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilFuelIndexers)
      };
    }

    return this._schema;
  }
}
