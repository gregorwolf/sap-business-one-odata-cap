/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesStages } from './SalesStages';
import { SalesStagesRequestBuilder } from './SalesStagesRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesStagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesStages<DeSerializersT>, DeSerializersT>
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
  ): SalesStagesApi<DeSerializersT> {
    return new SalesStagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesStages<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SalesOpportunitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SALES_OPPORTUNITIES: new OneToManyLink(
        'SalesOpportunities',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SalesStages;

  requestBuilder(): SalesStagesRequestBuilder<DeSerializersT> {
    return new SalesStagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesStages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesStages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesStages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesStages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesStages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENCE_NO: OrderableEdmTypeField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAGENO: OrderableEdmTypeField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CLOSING_PERCENTAGE: OrderableEdmTypeField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CANCELLED: EnumField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_SALES: EnumField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_PURCHASING: EnumField<
      SalesStages<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesStages<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesStages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sequenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NO: fieldBuilder.buildEdmTypeField(
          'SequenceNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link stageno} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGENO: fieldBuilder.buildEdmTypeField('Stageno', 'Edm.Int32', true),
        /**
         * Static representation of the {@link closingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ClosingPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cancelled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED: fieldBuilder.buildEnumField('Cancelled', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES: fieldBuilder.buildEnumField('IsSales', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isPurchasing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASING: fieldBuilder.buildEnumField(
          'IsPurchasing',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesStages)
      };
    }

    return this._schema;
  }
}
