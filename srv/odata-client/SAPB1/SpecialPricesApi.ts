/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpecialPrices } from './SpecialPrices';
import { SpecialPricesRequestBuilder } from './SpecialPricesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { PriceListsApi } from './PriceListsApi';
import { SpecialPriceDataArea } from './SpecialPriceDataArea';
import { BoYesNoEnum } from './BoYesNoEnum';
import { SourceCurrencyEnum } from './SourceCurrencyEnum';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SpecialPricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SpecialPrices<DeSerializersT>, DeSerializersT>
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
  ): SpecialPricesApi<DeSerializersT> {
    return new SpecialPricesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      PriceListsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[1]
      ),
      PRICE_LIST: new OneToOneLink('PriceList', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = SpecialPrices;

  requestBuilder(): SpecialPricesRequestBuilder<DeSerializersT> {
    return new SpecialPricesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SpecialPrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SpecialPrices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SpecialPrices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SpecialPrices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ITEM_CODE: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRICE_LIST_NUM: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    AUTO_UPDATE: EnumField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SOURCE_PRICE: EnumField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      SourceCurrencyEnum,
      true,
      true
    >;
    VALID: EnumField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SPECIAL_PRICE_DATA_AREAS: CollectionField<
      SpecialPrices<DeSerializers>,
      DeSerializersT,
      SpecialPriceDataArea,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST: OneToOneLink<
      SpecialPrices<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SpecialPrices<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CardCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscountPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link priceListNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST_NUM: fieldBuilder.buildEdmTypeField(
          'PriceListNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link autoUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_UPDATE: fieldBuilder.buildEnumField(
          'AutoUpdate',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link sourcePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRICE: fieldBuilder.buildEnumField(
          'SourcePrice',
          SourceCurrencyEnum,
          true
        ),
        /**
         * Static representation of the {@link valid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID: fieldBuilder.buildEnumField('Valid', BoYesNoEnum, true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link specialPriceDataAreas} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_PRICE_DATA_AREAS: fieldBuilder.buildCollectionField(
          'SpecialPriceDataAreas',
          SpecialPriceDataArea,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SpecialPrices)
      };
    }

    return this._schema;
  }
}
