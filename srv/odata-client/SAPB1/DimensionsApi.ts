/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Dimensions } from './Dimensions';
import { DimensionsRequestBuilder } from './DimensionsRequestBuilder';
import { DistributionRulesApi } from './DistributionRulesApi';
import { ProfitCentersApi } from './ProfitCentersApi';
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
export class DimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Dimensions<DeSerializersT>, DeSerializersT>
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
  ): DimensionsApi<DeSerializersT> {
    return new DimensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link distributionRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULES: OneToManyLink<
      Dimensions<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      Dimensions<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DistributionRulesApi<DeSerializersT>,
      ProfitCentersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISTRIBUTION_RULES: new OneToManyLink(
        'DistributionRules',
        this,
        linkedApis[0]
      ),
      PROFIT_CENTERS: new OneToManyLink('ProfitCenters', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Dimensions;

  requestBuilder(): DimensionsRequestBuilder<DeSerializersT> {
    return new DimensionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Dimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Dimensions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Dimensions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Dimensions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Dimensions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DIMENSION_CODE: OrderableEdmTypeField<
      Dimensions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIMENSION_NAME: OrderableEdmTypeField<
      Dimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      Dimensions<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DIMENSION_DESCRIPTION: OrderableEdmTypeField<
      Dimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link distributionRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULES: OneToManyLink<
      Dimensions<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      Dimensions<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Dimensions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dimensionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_CODE: fieldBuilder.buildEdmTypeField(
          'DimensionCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link dimensionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DimensionDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Dimensions)
      };
    }

    return this._schema;
  }
}
