/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartnersSetups } from './PartnersSetups';
import { PartnersSetupsRequestBuilder } from './PartnersSetupsRequestBuilder';
import { RelationshipsApi } from './RelationshipsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PartnersSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PartnersSetups<DeSerializersT>, DeSerializersT>
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
  ): PartnersSetupsApi<DeSerializersT> {
    return new PartnersSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link relationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONSHIP: OneToOneLink<
      PartnersSetups<DeSerializersT>,
      DeSerializersT,
      RelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      PartnersSetups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RelationshipsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELATIONSHIP: new OneToOneLink('Relationship', this, linkedApis[0]),
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PartnersSetups;

  requestBuilder(): PartnersSetupsRequestBuilder<DeSerializersT> {
    return new PartnersSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartnersSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PartnersSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PartnersSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PartnersSetups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTNER_ID: OrderableEdmTypeField<
      PartnersSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PartnersSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RELATIONSHIP: OrderableEdmTypeField<
      PartnersSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RELATED_BP: OrderableEdmTypeField<
      PartnersSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      PartnersSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONSHIP: OneToOneLink<
      PartnersSetups<DeSerializersT>,
      DeSerializersT,
      RelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      PartnersSetups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PartnersSetups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_ID: fieldBuilder.buildEdmTypeField(
          'PartnerID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultRelationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RELATIONSHIP: fieldBuilder.buildEdmTypeField(
          'DefaultRelationship',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link relatedBp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_BP: fieldBuilder.buildEdmTypeField(
          'RelatedBP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartnersSetups)
      };
    }

    return this._schema;
  }
}
