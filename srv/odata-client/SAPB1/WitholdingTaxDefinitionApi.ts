/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WitholdingTaxDefinition } from './WitholdingTaxDefinition';
import { WitholdingTaxDefinitionRequestBuilder } from './WitholdingTaxDefinitionRequestBuilder';
import { WtdEffectiveDate } from './WtdEffectiveDate';
import { Wtdbp } from './Wtdbp';
import { WtdItem } from './WtdItem';
import { WtdFreight } from './WtdFreight';
import { BoYesNoEnum } from './BoYesNoEnum';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class WitholdingTaxDefinitionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WitholdingTaxDefinition<DeSerializersT>, DeSerializersT>
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
  ): WitholdingTaxDefinitionApi<DeSerializersT> {
    return new WitholdingTaxDefinitionApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WitholdingTaxDefinition;

  requestBuilder(): WitholdingTaxDefinitionRequestBuilder<DeSerializersT> {
    return new WitholdingTaxDefinitionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WitholdingTaxDefinition<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WitholdingTaxDefinition<DeSerializersT>,
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
    typeof WitholdingTaxDefinition,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WitholdingTaxDefinition,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    W_TAX_CODE: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    W_TAX_NAME: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMULA_ID: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INACTIVE: EnumField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    OFFICIAL_CODE: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: EnumField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCodeCategoryEnum,
      true,
      true
    >;
    BASE_TYPE: EnumField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCodeBaseTypeEnum,
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MIN_AMOUNT: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BASE_AMOUNT_PRCT: OrderableEdmTypeField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SLIDING_SCALE_PROGRESSIVE_TAX: EnumField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CALCULATE_IN_AUTOMATIC_CM: EnumField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WTD_EFFECTIVE_DATE_COLLECTION: CollectionField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      WtdEffectiveDate,
      true,
      true
    >;
    WTDBP_COLLECTION: CollectionField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      Wtdbp,
      true,
      true
    >;
    WTD_ITEM_COLLECTION: CollectionField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      WtdItem,
      true,
      true
    >;
    WTD_FREIGHT_COLLECTION: CollectionField<
      WitholdingTaxDefinition<DeSerializers>,
      DeSerializersT,
      WtdFreight,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WitholdingTaxDefinition<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'WTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wTaxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_TAX_NAME: fieldBuilder.buildEdmTypeField(
          'WTaxName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formulaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_ID: fieldBuilder.buildEdmTypeField(
          'FormulaID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link officialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICIAL_CODE: fieldBuilder.buildEdmTypeField(
          'OfficialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          WithholdingTaxCodeCategoryEnum,
          true
        ),
        /**
         * Static representation of the {@link baseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TYPE: fieldBuilder.buildEnumField(
          'BaseType',
          WithholdingTaxCodeBaseTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.Int32', true),
        /**
         * Static representation of the {@link minAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link baseAmountPrct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT_PRCT: fieldBuilder.buildEdmTypeField(
          'BaseAmountPrct',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link slidingScaleProgressiveTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SLIDING_SCALE_PROGRESSIVE_TAX: fieldBuilder.buildEnumField(
          'SlidingScaleProgressiveTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link calculateInAutomaticCm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_IN_AUTOMATIC_CM: fieldBuilder.buildEnumField(
          'CalculateInAutomaticCM',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wtdEffectiveDateCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WTD_EFFECTIVE_DATE_COLLECTION: fieldBuilder.buildCollectionField(
          'WTDEffectiveDateCollection',
          WtdEffectiveDate,
          true
        ),
        /**
         * Static representation of the {@link wtdbpCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WTDBP_COLLECTION: fieldBuilder.buildCollectionField(
          'WTDBPCollection',
          Wtdbp,
          true
        ),
        /**
         * Static representation of the {@link wtdItemCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WTD_ITEM_COLLECTION: fieldBuilder.buildCollectionField(
          'WTDItemCollection',
          WtdItem,
          true
        ),
        /**
         * Static representation of the {@link wtdFreightCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WTD_FREIGHT_COLLECTION: fieldBuilder.buildCollectionField(
          'WTDFreightCollection',
          WtdFreight,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WitholdingTaxDefinition)
      };
    }

    return this._schema;
  }
}
