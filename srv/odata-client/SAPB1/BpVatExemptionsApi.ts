/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpVatExemptions } from './BpVatExemptions';
import { BpVatExemptionsRequestBuilder } from './BpVatExemptionsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { BpVatExemptionsLine } from './BpVatExemptionsLine';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BpVatExemptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BpVatExemptions<DeSerializersT>, DeSerializersT>
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
  ): BpVatExemptionsApi<DeSerializersT> {
    return new BpVatExemptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BpVatExemptions<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BpVatExemptions;

  requestBuilder(): BpVatExemptionsRequestBuilder<DeSerializersT> {
    return new BpVatExemptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BpVatExemptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BpVatExemptions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BpVatExemptions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BpVatExemptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      BpVatExemptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BP_CODE: OrderableEdmTypeField<
      BpVatExemptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      BpVatExemptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_VAT_EXEMPTIONS_LINES: CollectionField<
      BpVatExemptions<DeSerializers>,
      DeSerializersT,
      BpVatExemptionsLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BpVatExemptions<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BpVatExemptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absoluteEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSOLUTE_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsoluteEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CODE: fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link bpVatExemptionsLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_VAT_EXEMPTIONS_LINES: fieldBuilder.buildCollectionField(
          'BPVatExemptionsLines',
          BpVatExemptionsLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BpVatExemptions)
      };
    }

    return this._schema;
  }
}
