/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Territories } from './Territories';
import { TerritoriesRequestBuilder } from './TerritoriesRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ProjectManagementsApi } from './ProjectManagementsApi';
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
export class TerritoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Territories<DeSerializersT>, DeSerializersT>
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
  ): TerritoriesApi<DeSerializersT> {
    return new TerritoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOpportunitiesApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      ProjectManagementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_OPPORTUNITIES: new OneToManyLink(
        'SalesOpportunities',
        this,
        linkedApis[0]
      ),
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[1]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[2]
      ),
      PROJECT_MANAGEMENTS: new OneToManyLink(
        'ProjectManagements',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = Territories;

  requestBuilder(): TerritoriesRequestBuilder<DeSerializersT> {
    return new TerritoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Territories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Territories<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Territories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Territories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Territories, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TERRITORY_ID: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_INDEX: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INACTIVE: EnumField<
      Territories<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PARENT: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Territories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link territoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORY_ID: fieldBuilder.buildEdmTypeField(
          'TerritoryID',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link locationIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_INDEX: fieldBuilder.buildEdmTypeField(
          'LocationIndex',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link parent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT: fieldBuilder.buildEdmTypeField('Parent', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Territories)
      };
    }

    return this._schema;
  }
}
