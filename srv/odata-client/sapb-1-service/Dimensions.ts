/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionsRequestBuilder } from './DimensionsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Dimensions" of service "SAPB1".
 */
export class Dimensions extends EntityV4 implements DimensionsType {
  /**
   * Technical entity name for Dimensions.
   */
  static _entityName = 'Dimensions';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Dimension Code.
   * @nullable
   */
  dimensionCode?: number;
  /**
   * Dimension Name.
   * @nullable
   */
  dimensionName?: string;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum;
  /**
   * Dimension Description.
   * @nullable
   */
  dimensionDescription?: string;
  /**
   * One-to-many navigation property to the [[ProfitCenters]] entity.
   */
  profitCenters!: ProfitCenters[];
  /**
   * One-to-many navigation property to the [[DistributionRules]] entity.
   */
  distributionRules!: DistributionRules[];

  /**
   * Returns an entity builder to construct instances of `Dimensions`.
   * @returns A builder that constructs instances of entity type `Dimensions`.
   */
  static builder(): EntityBuilderType<Dimensions, DimensionsType> {
    return EntityV4.entityBuilder(Dimensions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Dimensions` entity type.
   * @returns A `Dimensions` request builder.
   */
  static requestBuilder(): DimensionsRequestBuilder {
    return new DimensionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Dimensions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Dimensions`.
   */
  static customField(fieldName: string): CustomFieldV4<Dimensions> {
    return EntityV4.customFieldSelector(fieldName, Dimensions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ProfitCenters, ProfitCentersType } from './ProfitCenters';
import { DistributionRules, DistributionRulesType } from './DistributionRules';

export interface DimensionsType {
  dimensionCode?: number | null;
  dimensionName?: string | null;
  isActive?: BoYesNoEnum | null;
  dimensionDescription?: string | null;
  profitCenters: ProfitCentersType[];
  distributionRules: DistributionRulesType[];
}

export namespace Dimensions {
  /**
   * Static representation of the [[dimensionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_CODE: NumberField<Dimensions> = new NumberField('DimensionCode', Dimensions, 'Edm.Int32');
  /**
   * Static representation of the [[dimensionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_NAME: StringField<Dimensions> = new StringField('DimensionName', Dimensions, 'Edm.String');
  /**
   * Static representation of the [[isActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE: EnumField<Dimensions> = new EnumField('IsActive', Dimensions);
  /**
   * Static representation of the [[dimensionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_DESCRIPTION: StringField<Dimensions> = new StringField('DimensionDescription', Dimensions, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFIT_CENTERS: OneToManyLink<Dimensions, ProfitCenters> = new OneToManyLink('ProfitCenters', Dimensions, ProfitCenters);
  /**
   * Static representation of the one-to-many navigation property [[distributionRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULES: OneToManyLink<Dimensions, DistributionRules> = new OneToManyLink('DistributionRules', Dimensions, DistributionRules);
  /**
   * All fields of the Dimensions entity.
   */
  export const _allFields: Array<NumberField<Dimensions> | StringField<Dimensions> | EnumField<Dimensions> | OneToManyLink<Dimensions, ProfitCenters> | OneToManyLink<Dimensions, DistributionRules>> = [
    Dimensions.DIMENSION_CODE,
    Dimensions.DIMENSION_NAME,
    Dimensions.IS_ACTIVE,
    Dimensions.DIMENSION_DESCRIPTION,
    Dimensions.PROFIT_CENTERS,
    Dimensions.DISTRIBUTION_RULES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Dimensions> = new AllFields('*', Dimensions);
  /**
   * All key fields of the Dimensions entity.
   */
  export const _keyFields: Array<Field<Dimensions>> = [Dimensions.DIMENSION_CODE];
  /**
   * Mapping of all key field names to the respective static field property Dimensions.
   */
  export const _keys: { [keys: string]: Field<Dimensions> } = Dimensions._keyFields.reduce((acc: { [keys: string]: Field<Dimensions> }, field: Field<Dimensions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
