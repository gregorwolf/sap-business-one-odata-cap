/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsGroups } from './CustomsGroups';
import { CustomsGroupsRequestBuilder } from './CustomsGroupsRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomsGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomsGroups<DeSerializersT>, DeSerializersT>
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
  ): CustomsGroupsApi<DeSerializersT> {
    return new CustomsGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      CustomsGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      CustomsGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, ChartOfAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CustomsGroups;

  requestBuilder(): CustomsGroupsRequestBuilder<DeSerializersT> {
    return new CustomsGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomsGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomsGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomsGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustomsGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OTHER: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LOCKED: EnumField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CUSTOMS_ALLOCATION_ACCOUNT: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_EXPENSE_ACCOUNT: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT_ADDRESS: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT_STATE: OrderableEdmTypeField<
      CustomsGroups<DeSerializers>,
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
      CustomsGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      CustomsGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomsGroups<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
        /**
         * Static representation of the {@link customs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS: fieldBuilder.buildEdmTypeField('Customs', 'Edm.Double', true),
        /**
         * Static representation of the {@link purchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE: fieldBuilder.buildEdmTypeField(
          'Purchase',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link other} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER: fieldBuilder.buildEdmTypeField('Other', 'Edm.Double', true),
        /**
         * Static representation of the {@link total} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL: fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true),
        /**
         * Static representation of the {@link customsAllocationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_ALLOCATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomsAllocationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsExpenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomsExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PortAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_STATE: fieldBuilder.buildEdmTypeField(
          'PortState',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomsGroups)
      };
    }

    return this._schema;
  }
}
