/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxCodes } from './SalesTaxCodes';
import { SalesTaxCodesRequestBuilder } from './SalesTaxCodesRequestBuilder';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { WarehousesApi } from './WarehousesApi';
import { ItemsApi } from './ItemsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { UsersApi } from './UsersApi';
import { ExpenseTypesApi } from './ExpenseTypesApi';
import { SalesTaxCodesLine } from './SalesTaxCodesLine';
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
  EnumField,
  OrderableEdmTypeField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesTaxCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTaxCodes<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxCodesApi<DeSerializersT> {
    return new SalesTaxCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_TYPES: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      ExpenseTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserDefaultGroupsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      ExpenseTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_DEFAULT_GROUPS: new OneToManyLink(
        'UserDefaultGroups',
        this,
        linkedApis[0]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[1]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[2]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[3]
      ),
      USER: new OneToOneLink('User', this, linkedApis[4]),
      EXPENSE_TYPES: new OneToManyLink('ExpenseTypes', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = SalesTaxCodes;

  requestBuilder(): SalesTaxCodesRequestBuilder<DeSerializersT> {
    return new SalesTaxCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesTaxCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesTaxCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesTaxCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALID_FOR_AR: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FOR_AP: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ITEM_LEVEL: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INACTIVE: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FA_DEBIT: EnumField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SALES_TAX_CODES_LINES: CollectionField<
      SalesTaxCodes<DeSerializers>,
      DeSerializersT,
      SalesTaxCodesLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_TYPES: OneToManyLink<
      SalesTaxCodes<DeSerializersT>,
      DeSerializersT,
      ExpenseTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesTaxCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link validForAr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR_AR: fieldBuilder.buildEnumField(
          'ValidForAR',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link validForAp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR_AP: fieldBuilder.buildEnumField(
          'ValidForAP',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link freight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT: fieldBuilder.buildEnumField('Freight', BoYesNoEnum, true),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link isItemLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_LEVEL: fieldBuilder.buildEnumField(
          'IsItemLevel',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link faDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_DEBIT: fieldBuilder.buildEnumField('FADebit', BoYesNoEnum, true),
        /**
         * Static representation of the {@link salesTaxCodesLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODES_LINES: fieldBuilder.buildCollectionField(
          'SalesTaxCodes_Lines',
          SalesTaxCodesLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxCodes)
      };
    }

    return this._schema;
  }
}
