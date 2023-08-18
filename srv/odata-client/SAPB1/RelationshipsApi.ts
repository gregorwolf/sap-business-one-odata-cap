/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Relationships } from './Relationships';
import { RelationshipsRequestBuilder } from './RelationshipsRequestBuilder';
import { PartnersSetupsApi } from './PartnersSetupsApi';
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
export class RelationshipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Relationships<DeSerializersT>, DeSerializersT>
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
  ): RelationshipsApi<DeSerializersT> {
    return new RelationshipsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link partnersSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTNERS_SETUPS: OneToManyLink<
      Relationships<DeSerializersT>,
      DeSerializersT,
      PartnersSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PartnersSetupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PARTNERS_SETUPS: new OneToManyLink('PartnersSetups', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Relationships;

  requestBuilder(): RelationshipsRequestBuilder<DeSerializersT> {
    return new RelationshipsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Relationships<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Relationships<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Relationships<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Relationships, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Relationships, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RELATIONSHIP_DESCRIPTION: OrderableEdmTypeField<
      Relationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIONSHIP_CODE: OrderableEdmTypeField<
      Relationships<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partnersSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTNERS_SETUPS: OneToManyLink<
      Relationships<DeSerializersT>,
      DeSerializersT,
      PartnersSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Relationships<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link relationshipDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RelationshipDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relationshipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_CODE: fieldBuilder.buildEdmTypeField(
          'RelationshipCode',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Relationships)
      };
    }

    return this._schema;
  }
}
