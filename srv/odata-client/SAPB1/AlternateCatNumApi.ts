/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternateCatNum } from './AlternateCatNum';
import { AlternateCatNumRequestBuilder } from './AlternateCatNumRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
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
export class AlternateCatNumApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AlternateCatNum<DeSerializersT>, DeSerializersT>
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
  ): AlternateCatNumApi<DeSerializersT> {
    return new AlternateCatNumApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      AlternateCatNum<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      AlternateCatNum<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AlternateCatNum;

  requestBuilder(): AlternateCatNumRequestBuilder<DeSerializersT> {
    return new AlternateCatNumRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AlternateCatNum<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AlternateCatNum<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AlternateCatNum, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AlternateCatNum,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ITEM_CODE: OrderableEdmTypeField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSTITUTE: OrderableEdmTypeField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_BP_CATALOG_NUMBER: EnumField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_DEFAULT: EnumField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_GP_KATALOGNAME: OrderableEdmTypeField<
      AlternateCatNum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      AlternateCatNum<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      AlternateCatNum<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AlternateCatNum<DeSerializers>>;
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
         * Static representation of the {@link substitute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTE: fieldBuilder.buildEdmTypeField(
          'Substitute',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayBpCatalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_BP_CATALOG_NUMBER: fieldBuilder.buildEnumField(
          'DisplayBPCatalogNumber',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', BoYesNoEnum, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uGpKatalogname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_GP_KATALOGNAME: fieldBuilder.buildEdmTypeField(
          'U_GPKatalogname',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AlternateCatNum)
      };
    }

    return this._schema;
  }
}
