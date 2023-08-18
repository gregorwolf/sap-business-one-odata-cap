/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Manufacturers } from './Manufacturers';
import { ManufacturersRequestBuilder } from './ManufacturersRequestBuilder';
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
export class ManufacturersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Manufacturers<DeSerializersT>, DeSerializersT>
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
  ): ManufacturersApi<DeSerializersT> {
    return new ManufacturersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      Manufacturers<DeSerializersT>,
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

  entityConstructor = Manufacturers;

  requestBuilder(): ManufacturersRequestBuilder<DeSerializersT> {
    return new ManufacturersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Manufacturers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Manufacturers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Manufacturers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Manufacturers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Manufacturers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Manufacturers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MANUFACTURER_NAME: OrderableEdmTypeField<
      Manufacturers<DeSerializers>,
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
      Manufacturers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Manufacturers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link manufacturerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_NAME: fieldBuilder.buildEdmTypeField(
          'ManufacturerName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Manufacturers)
      };
    }

    return this._schema;
  }
}
