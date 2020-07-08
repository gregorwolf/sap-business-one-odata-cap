/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoePortfoliosRequestBuilder } from './BoePortfoliosRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BOEPortfolios" of service "SAPB1".
 */
export class BoePortfolios extends Entity implements BoePortfoliosType {
  /**
   * Technical entity name for BoePortfolios.
   */
  static _entityName = 'BOEPortfolios';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BoePortfolios.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Portfolio Entry.
   * @nullable
   */
  portfolioEntry?: number;
  /**
   * Portfolio Id.
   * @nullable
   */
  portfolioId?: string;
  /**
   * Portfolio Code.
   * @nullable
   */
  portfolioCode?: string;
  /**
   * Portfolio Num.
   * @nullable
   */
  portfolioNum?: string;
  /**
   * Portfolio Description.
   * @nullable
   */
  portfolioDescription?: string;

  /**
   * Returns an entity builder to construct instances `BoePortfolios`.
   * @returns A builder that constructs instances of entity type `BoePortfolios`.
   */
  static builder(): EntityBuilderType<BoePortfolios, BoePortfoliosTypeForceMandatory> {
    return Entity.entityBuilder(BoePortfolios);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BoePortfolios` entity type.
   * @returns A `BoePortfolios` request builder.
   */
  static requestBuilder(): BoePortfoliosRequestBuilder {
    return new BoePortfoliosRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoePortfolios`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BoePortfolios`.
   */
  static customField(fieldName: string): CustomField<BoePortfolios> {
    return Entity.customFieldSelector(fieldName, BoePortfolios);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BoePortfoliosType {
  portfolioEntry?: number;
  portfolioId?: string;
  portfolioCode?: string;
  portfolioNum?: string;
  portfolioDescription?: string;
}

export interface BoePortfoliosTypeForceMandatory {
  portfolioEntry: number;
  portfolioId: string;
  portfolioCode: string;
  portfolioNum: string;
  portfolioDescription: string;
}

export namespace BoePortfolios {
  /**
   * Static representation of the [[portfolioEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_ENTRY: NumberField<BoePortfolios> = new NumberField('PortfolioEntry', BoePortfolios, 'Edm.Int32');
  /**
   * Static representation of the [[portfolioId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_ID: StringField<BoePortfolios> = new StringField('PortfolioID', BoePortfolios, 'Edm.String');
  /**
   * Static representation of the [[portfolioCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_CODE: StringField<BoePortfolios> = new StringField('PortfolioCode', BoePortfolios, 'Edm.String');
  /**
   * Static representation of the [[portfolioNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_NUM: StringField<BoePortfolios> = new StringField('PortfolioNum', BoePortfolios, 'Edm.String');
  /**
   * Static representation of the [[portfolioDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_DESCRIPTION: StringField<BoePortfolios> = new StringField('PortfolioDescription', BoePortfolios, 'Edm.String');
  /**
   * All fields of the BoePortfolios entity.
   */
  export const _allFields: Array<NumberField<BoePortfolios> | StringField<BoePortfolios>> = [
    BoePortfolios.PORTFOLIO_ENTRY,
    BoePortfolios.PORTFOLIO_ID,
    BoePortfolios.PORTFOLIO_CODE,
    BoePortfolios.PORTFOLIO_NUM,
    BoePortfolios.PORTFOLIO_DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BoePortfolios> = new AllFields('*', BoePortfolios);
  /**
   * All key fields of the BoePortfolios entity.
   */
  export const _keyFields: Array<Field<BoePortfolios>> = [BoePortfolios.PORTFOLIO_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BoePortfolios.
   */
  export const _keys: { [keys: string]: Field<BoePortfolios> } = BoePortfolios._keyFields.reduce((acc: { [keys: string]: Field<BoePortfolios> }, field: Field<BoePortfolios>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
