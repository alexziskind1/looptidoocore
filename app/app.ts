import "./bundle-config";
import * as app from 'application';
import * as nav from './shared/navigation';

app.start({ moduleName: nav.getEntryPage() });
