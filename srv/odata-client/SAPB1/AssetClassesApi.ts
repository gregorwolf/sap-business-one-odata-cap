/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetClasses } from './AssetClasses';
import { AssetClassesRequestBuilder } from './AssetClassesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { AttributeGroupsApi } from './AttributeGroupsApi';
import { AssetClassLine } from './AssetClassLine';
import { AssetTypeEnum } from './AssetTypeEnum';
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
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetClassesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetClasses<DeSerializersT>, DeSerializersT>
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
  ): AssetClassesApi<DeSerializersT> {
    return new AssetClassesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attributeGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_GROUP_2: OneToOneLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      AttributeGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      AttributeGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[1]),
      ATTRIBUTE_GROUP_2: new OneToOneLink(
        'AttributeGroup2',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetClasses;

  requestBuilder(): AssetClassesRequestBuilder<DeSerializersT> {
    return new AssetClassesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetClasses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetClasses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetClasses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetClasses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AssetClasses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE: EnumField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      AssetTypeEnum,
      true,
      true
    >;
    VALUE_LIMIT_FROM: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VALUE_LIMIT_TO: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTRIBUTE_GROUP: OrderableEdmTypeField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ASSET_CLASS_COLLECTION: CollectionField<
      AssetClasses<DeSerializers>,
      DeSerializersT,
      AssetClassLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attributeGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_GROUP_2: OneToOneLink<
      AssetClasses<DeSerializersT>,
      DeSerializersT,
      AttributeGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetClasses<DeSerializers>>;
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
        /**
         * Static representation of the {@link assetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE: fieldBuilder.buildEnumField(
          'AssetType',
          AssetTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link valueLimitFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_LIMIT_FROM: fieldBuilder.buildEdmTypeField(
          'ValueLimitFrom',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link valueLimitTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_LIMIT_TO: fieldBuilder.buildEdmTypeField(
          'ValueLimitTo',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link attributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'AttributeGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link assetClassCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CLASS_COLLECTION: fieldBuilder.buildCollectionField(
          'AssetClassCollection',
          AssetClassLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetClasses)
      };
    }

    return this._schema;
  }
}
