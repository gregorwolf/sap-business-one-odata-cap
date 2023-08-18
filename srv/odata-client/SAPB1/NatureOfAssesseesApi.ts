/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NatureOfAssessees } from './NatureOfAssessees';
import { NatureOfAssesseesRequestBuilder } from './NatureOfAssesseesRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { AssesseeTypeEnum } from './AssesseeTypeEnum';
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
export class NatureOfAssesseesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NatureOfAssessees<DeSerializersT>, DeSerializersT>
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
  ): NatureOfAssesseesApi<DeSerializersT> {
    return new NatureOfAssesseesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      NatureOfAssessees<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WithholdingTaxCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = NatureOfAssessees;

  requestBuilder(): NatureOfAssesseesRequestBuilder<DeSerializersT> {
    return new NatureOfAssesseesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NatureOfAssessees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NatureOfAssessees<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof NatureOfAssessees,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NatureOfAssessees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      NatureOfAssessees<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      NatureOfAssessees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NatureOfAssessees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSEE_TYPE: EnumField<
      NatureOfAssessees<DeSerializers>,
      DeSerializersT,
      AssesseeTypeEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      NatureOfAssessees<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NatureOfAssessees<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
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
         * Static representation of the {@link assesseeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSEE_TYPE: fieldBuilder.buildEnumField(
          'AssesseeType',
          AssesseeTypeEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NatureOfAssessees)
      };
    }

    return this._schema;
  }
}
