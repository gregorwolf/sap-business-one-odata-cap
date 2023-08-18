/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxExemptReasons } from './TaxExemptReasons';
import { TaxExemptReasonsRequestBuilder } from './TaxExemptReasonsRequestBuilder';
import { VatGroupsApi } from './VatGroupsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxExemptReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxExemptReasons<DeSerializersT>, DeSerializersT>
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
  ): TaxExemptReasonsApi<DeSerializersT> {
    return new TaxExemptReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vatGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUPS: OneToManyLink<
      TaxExemptReasons<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [VatGroupsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      VAT_GROUPS: new OneToManyLink('VatGroups', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxExemptReasons;

  requestBuilder(): TaxExemptReasonsRequestBuilder<DeSerializersT> {
    return new TaxExemptReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxExemptReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxExemptReasons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxExemptReasons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxExemptReasons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      TaxExemptReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxExemptReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vatGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUPS: OneToManyLink<
      TaxExemptReasons<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxExemptReasons<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxExemptReasons)
      };
    }

    return this._schema;
  }
}
