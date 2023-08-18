/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowLineItems } from './CashFlowLineItems';
import { CashFlowLineItemsRequestBuilder } from './CashFlowLineItemsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CashFlowLineItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CashFlowLineItems<DeSerializersT>, DeSerializersT>
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
  ): CashFlowLineItemsApi<DeSerializersT> {
    return new CashFlowLineItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashFlowLineItems;

  requestBuilder(): CashFlowLineItemsRequestBuilder<DeSerializersT> {
    return new CashFlowLineItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashFlowLineItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CashFlowLineItems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CashFlowLineItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowLineItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LINE_ITEM_ID: OrderableEdmTypeField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_ITEM_NAME: OrderableEdmTypeField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_LINE_ITEM: EnumField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PARENT_ARTICLE: OrderableEdmTypeField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DRAWER: OrderableEdmTypeField<
      CashFlowLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CashFlowLineItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link lineItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'LineItemID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'LineItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeLineItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_LINE_ITEM: fieldBuilder.buildEnumField(
          'ActiveLineItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link parentArticle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ARTICLE: fieldBuilder.buildEdmTypeField(
          'ParentArticle',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.Int32', true),
        /**
         * Static representation of the {@link drawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER: fieldBuilder.buildEdmTypeField('Drawer', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowLineItems)
      };
    }

    return this._schema;
  }
}
