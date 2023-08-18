/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningLetters } from './DunningLetters';
import { DunningLettersRequestBuilder } from './DunningLettersRequestBuilder';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DunningLettersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DunningLetters<DeSerializersT>, DeSerializersT>
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
  ): DunningLettersApi<DeSerializersT> {
    return new DunningLettersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DunningLetters<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DunningLetters;

  requestBuilder(): DunningLettersRequestBuilder<DeSerializersT> {
    return new DunningLettersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DunningLetters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DunningLetters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DunningLetters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DunningLetters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DunningLetters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FEE_CURRENCY: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROW_NUMBER: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LETTER_FORMAT: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVEAFTER: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_BALANCE_CURRENCY: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEEPERLETTER: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CALC_INTEREST: EnumField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MINIMUM_BALANCE: OrderableEdmTypeField<
      DunningLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DunningLetters<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DunningLetters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link feeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'FeeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rowNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_NUMBER: fieldBuilder.buildEdmTypeField(
          'RowNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link letterFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_FORMAT: fieldBuilder.buildEdmTypeField(
          'LetterFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveafter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVEAFTER: fieldBuilder.buildEdmTypeField(
          'Effectiveafter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumBalanceCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BALANCE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MinimumBalanceCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feeperletter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEEPERLETTER: fieldBuilder.buildEdmTypeField(
          'Feeperletter',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link calcInterest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_INTEREST: fieldBuilder.buildEnumField(
          'CalcInterest',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link minimumBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BALANCE: fieldBuilder.buildEdmTypeField(
          'MinimumBalance',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DunningLetters)
      };
    }

    return this._schema;
  }
}
