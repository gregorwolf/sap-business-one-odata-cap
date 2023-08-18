/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerEquipmentCards } from './CustomerEquipmentCards';
import { CustomerEquipmentCardsRequestBuilder } from './CustomerEquipmentCardsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ItemsApi } from './ItemsApi';
import { CountriesApi } from './CountriesApi';
import { ServiceContractsApi } from './ServiceContractsApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { TerritoriesApi } from './TerritoriesApi';
import { Attachments2Api } from './Attachments2Api';
import { CustomerEquipmentCardBusinessPartner } from './CustomerEquipmentCardBusinessPartner';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoSerialNumberStatus } from './BoSerialNumberStatus';
import { BoEquipmentBpType } from './BoEquipmentBpType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerEquipmentCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerEquipmentCards<DeSerializersT>, DeSerializersT>
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
  ): CustomerEquipmentCardsApi<DeSerializersT> {
    return new CustomerEquipmentCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACT: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ServiceContractsApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      TerritoriesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      ITEM: new OneToOneLink('Item', this, linkedApis[1]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[2]),
      SERVICE_CONTRACT: new OneToOneLink(
        'ServiceContract',
        this,
        linkedApis[3]
      ),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[4]),
      TERRITORY: new OneToOneLink('Territory', this, linkedApis[5]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = CustomerEquipmentCards;

  requestBuilder(): CustomerEquipmentCardsRequestBuilder<DeSerializersT> {
    return new CustomerEquipmentCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerEquipmentCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerEquipmentCards<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CustomerEquipmentCards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerEquipmentCards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EQUIPMENT_CARD_NUM: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMPLOYEE_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DIRECT_CUSTOMER_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_CUSTOMER_NAME: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_SERIAL_NUM: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_SERIAL_NUM: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_RESOLUTION_TIME: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REQUIRED_RESOLUTION_UNIT: EnumField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      BoResolutionUnits,
      true,
      true
    >;
    ITEM_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DESCRIPTION: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CONTACT_PHONE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALL_LOCATION: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTRACT_START_DATE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CONTRACT_END_DATE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DELIVERY_CODE: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DELIVERY_NUMBER: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS_OF_SERIAL_NUMBER: EnumField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      BoSerialNumberStatus,
      true,
      true
    >;
    REPLACE_SN: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_TECHNICIAN: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REPLACED_BY_SN: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULTTERRITORY: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BUILDING_FLOOR_ROOM: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STREET_NO: OrderableEdmTypeField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_BP_TYPE: EnumField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      BoEquipmentBpType,
      true,
      true
    >;
    CUSTOMER_EQUIPMENT_CARD_BUSINESS_PARTNERS: CollectionField<
      CustomerEquipmentCards<DeSerializers>,
      DeSerializersT,
      CustomerEquipmentCardBusinessPartner,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACT: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerEquipmentCards<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link equipmentCardNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT_CARD_NUM: fieldBuilder.buildEdmTypeField(
          'EquipmentCardNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactEmployeeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMPLOYEE_CODE: fieldBuilder.buildEdmTypeField(
          'ContactEmployeeCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link directCustomerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_CUSTOMER_CODE: fieldBuilder.buildEdmTypeField(
          'DirectCustomerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directCustomerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'DirectCustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturerSerialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'ManufacturerSerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalSerialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'InternalSerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredResolutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_RESOLUTION_TIME: fieldBuilder.buildEdmTypeField(
          'RequiredResolutionTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link requiredResolutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_RESOLUTION_UNIT: fieldBuilder.buildEnumField(
          'RequiredResolutionUnit',
          BoResolutionUnits,
          true
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link contactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link block} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK: fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_CODE: fieldBuilder.buildEdmTypeField(
          'StateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link installLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALL_LOCATION: fieldBuilder.buildEdmTypeField(
          'InstallLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_CODE: fieldBuilder.buildEdmTypeField(
          'ContractCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link contractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'ContractStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link contractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'ContractEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link deliveryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link deliveryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link statusOfSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_OF_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'StatusOfSerialNumber',
          BoSerialNumberStatus,
          true
        ),
        /**
         * Static representation of the {@link replaceSn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACE_SN: fieldBuilder.buildEdmTypeField(
          'ReplaceSN',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultTechnician} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TECHNICIAN: fieldBuilder.buildEdmTypeField(
          'DefaultTechnician',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link replacedBySn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACED_BY_SN: fieldBuilder.buildEdmTypeField(
          'ReplacedBySN',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultterritory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULTTERRITORY: fieldBuilder.buildEdmTypeField(
          'Defaultterritory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link buildingFloorRoom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_FLOOR_ROOM: fieldBuilder.buildEdmTypeField(
          'BuildingFloorRoom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link streetNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NO: fieldBuilder.buildEdmTypeField(
          'StreetNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceBpType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BP_TYPE: fieldBuilder.buildEnumField(
          'ServiceBPType',
          BoEquipmentBpType,
          true
        ),
        /**
         * Static representation of the {@link customerEquipmentCardBusinessPartners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_EQUIPMENT_CARD_BUSINESS_PARTNERS:
          fieldBuilder.buildCollectionField(
            'CustomerEquipmentCardBusinessPartners',
            CustomerEquipmentCardBusinessPartner,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerEquipmentCards)
      };
    }

    return this._schema;
  }
}
